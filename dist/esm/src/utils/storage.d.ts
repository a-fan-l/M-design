type TimeUnit = 'minute' | 'hour' | 'day';
interface StorageData<T> {
    value: T;
    timestamp: number;
    expire: number;
    unit: TimeUnit;
}
interface SetStorageParams<T> {
    key: string;
    value: T;
    expire?: number;
    unit?: TimeUnit;
    islocal?: boolean;
}
interface GetStorageParams {
    key: string;
    islocal?: boolean;
    isexpired?: boolean;
}
/**
 * 设置存储数据
 * @param key 存储键名
 * @param value 存储值
 * @param expire 过期时间
 * @param unit 过期时间单位，默认为小时
 * @param islocal 是否使用 localStorage，默认为 true
 */
export declare const setStorage: <T>({ key, value, expire, unit, islocal, }: SetStorageParams<T>) => void;
export declare const getStorage: <T>({ key, isexpired, islocal, }: GetStorageParams) => StorageData<T> | null;
/**
 * 移除指定的存储数据
 * @param key 存储键名
 * @param islocal 是否使用 localStorage，默认为 true
 */
export declare const removeStorage: (key: string, islocal?: boolean) => void;
/**
 * 清除所有存储数据
 * @param islocal 是否使用 localStorage，默认为 true
 */
export declare const clearStorage: (islocal?: boolean) => void;
/**
 * 获取存储数据
 * @param islocal 是否使用 localStorage，默认为 true
 */
export declare const getItem: ({ key, islocal }: {
    key: string;
    islocal?: boolean | undefined;
}) => string | null;
/**
 * 获取存储数据
 * @param islocal 是否使用 localStorage，默认为 true
 */
export declare const setItem: ({ key, value, islocal, }: {
    key: string;
    value: string;
    islocal?: boolean | undefined;
}) => void;
declare const storage: {
    set: <T>({ key, value, expire, unit, islocal, }: SetStorageParams<T>) => void;
    get: <T_1>({ key, isexpired, islocal, }: GetStorageParams) => StorageData<T_1> | null;
    remove: (key: string, islocal?: boolean) => void;
    clear: (islocal?: boolean) => void;
    getItem: ({ key, islocal }: {
        key: string;
        islocal?: boolean | undefined;
    }) => string | null;
    setItem: ({ key, value, islocal, }: {
        key: string;
        value: string;
        islocal?: boolean | undefined;
    }) => void;
};
export default storage;
//# sourceMappingURL=storage.d.ts.map