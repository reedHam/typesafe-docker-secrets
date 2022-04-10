
export const parseObjectAsInterface = (name: string, obj: unknown, options: { export?: boolean, default?: boolean }): string => {
    return `${options.export || options.default ? 'export' : ''} ${options.default ? 'default' : ''} interface ${name} ${parseObjAsInterfaceBody(obj)}\n`;
}


export const parseObjAsInterfaceBody = (obj: any, depth = 0): string => {
    const entries = Object.entries(obj);
    if (entries.length === 0) {
        return '{}';
    }
    const getType = (value: unknown): string => {
        if (Array.isArray(value)) {
            return `${Array.from(new Set(value.map(getType))).join(' | ')}[]`;
        } else if (typeof value === 'object') {
            return parseObjAsInterfaceBody(value, depth + 1);   
        }
        return typeof value;
    }
    return `{\n${entries.map(([key, value]) => `${new Array(depth + 1).fill('\t').join('')}"${key}": ${getType(value)};`).join('\n')}\n${new Array(depth).fill('\t').join('')}}`;
};
