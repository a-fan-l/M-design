import fs from 'fs';
import path from 'path';

const COMPONENTS_DIR = path.join(process.cwd(), 'src/components');
const STORIES_DIR = path.join(process.cwd(), 'stories');

// 获取命令行参数
const targetDir = process.argv[2] ? path.join(COMPONENTS_DIR, process.argv[2]) : COMPONENTS_DIR;

interface ComponentInfo {
  name: string;
  relativePath: string;
}

function findComponents(
  dir: string,
  components: ComponentInfo[] = [],
  baseDir: string = COMPONENTS_DIR
): ComponentInfo[] {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findComponents(filePath, components, baseDir);
    } else if (file.match(/\.(tsx|jsx)$/) && !file.includes('.stories.')) {
      const name = path.parse(file).name;
      const relativePath = path.relative(baseDir, dir);
      components.push({ name, relativePath });
    }
  }

  return components;
}

function generateStoryTemplate(componentName: string, relativePath: string): string {
  const importPath = `@components/${relativePath}${componentName === 'index' ? '' : `/${componentName}`}`;
  const ComponentName =
    componentName === 'index'
      ? path.basename(relativePath).charAt(0).toUpperCase() + path.basename(relativePath).slice(1)
      : componentName.charAt(0).toUpperCase() + componentName.slice(1);
  const ComponentTitle = relativePath + (componentName === 'index' ? '' : `/${componentName}`);

  return `import type { Meta, StoryObj } from '@storybook/react';
import ${ComponentName} from '${importPath}';
import './index.css';

const meta: Meta<typeof ${ComponentName}> = {
  title: '${relativePath}/${ComponentName}',
  component: ${ComponentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${ComponentName}>;

export const Primary: Story = {
  args: {
    // Add default props here
  },
};
`;
}

function generateCssTemplate(componentName: string): string {
  return `.${componentName} {
  /* Add your styles here */
}
`;
}

function ensureDirectoryExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function generateStories() {
  const components = findComponents(targetDir);
  const totalComponents = components.length;
  let processedComponents = 0;

  console.log(
    `\n找到 ${totalComponents} 个组件需要生成 Stories\n目标目录: ${path.relative(COMPONENTS_DIR, targetDir)}\n`
  );

  if (totalComponents === 0) {
    console.log('未找到需要生成 Stories 的组件');
    return;
  }

  for (const component of components) {
    processedComponents++;
    const progress = Math.floor((processedComponents / totalComponents) * 100);
    const progressBar =
      '='.repeat(Math.floor(progress / 2)) + ' '.repeat(50 - Math.floor(progress / 2));
    process.stdout.write(`\r[${progressBar}] ${progress}% | 正在处理: ${component.name}`);
    // Create stories directory structure matching the component structure
    const componentStoryDir = path.join(STORIES_DIR, component.relativePath);
    ensureDirectoryExists(componentStoryDir);

    // Generate story file
    const storyPath = path.join(componentStoryDir, 'index.stories.tsx');
    if (!fs.existsSync(storyPath)) {
      const storyContent = generateStoryTemplate(component.name, component.relativePath);
      fs.writeFileSync(storyPath, storyContent, 'utf8');
      console.log(`Generated story for ${component.name} at ${storyPath}`);
    }

    // Generate CSS file
    const cssPath = path.join(componentStoryDir, 'index.css');
    if (!fs.existsSync(cssPath)) {
      const cssContent = generateCssTemplate(component.name);
      fs.writeFileSync(cssPath, cssContent, 'utf8');
      console.log(`Generated CSS for ${component.name} at ${cssPath}`);
    }
  }
}

generateStories();
