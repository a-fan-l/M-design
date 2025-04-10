declare module 'redux-persist-cookie-storage' {
  export interface CookieStorageOptions {
    keyPrefix?: string;
    indexKey?: string;
    expiration?: {
      default?: number | null;
      [key: string]: number | null | undefined;
    };
    setCookieOptions?: any;
  }

  export class CookieStorage {
    constructor(cookies: any, options?: CookieStorageOptions);
    getItem(
      key: string,
      callback?: (error: any, value: string | null) => void
    ): Promise<string | null>;
    setItem(key: string, value: string, callback?: (error: any) => void): Promise<null>;
    removeItem(key: string, callback?: (error: any) => void): Promise<null>;
    getAllKeys(callback?: (error: any, keys: string[]) => void): Promise<string[]>;
  }

  export class NodeCookiesWrapper {
    constructor(req: any, res: any);
    get(name: string): string | null;
    set(name: string, value: string, options?: any): void;
    expire(name: string): void;
  }
}
