"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormMappers = void 0;
function mapModelToFields(stateData, errors, params) {
    return stateData.map(({ name, value }) => {
        const flatName = typeof name === 'string' || typeof name === 'number' ? name : name.join('.');
        const newValue = params ? params[flatName] : value;
        const newErrors = errors ? errors[flatName] : [];
        return { value: newValue, name, errors: newErrors };
    });
}
function mapToFields(stateData, errors, data, params) {
    return stateData.map(({ name, value }) => {
        const flatName = typeof name === 'string' || typeof name === 'number' ? name : name.join('.');
        const hasParams = params && typeof params === 'object' && flatName in params;
        const paramsValue = params && params[flatName];
        const hasValue = data && typeof data === 'object' && flatName in data;
        const dataValue = data && hasValue ? data[flatName] : value;
        const newValue = hasParams ? paramsValue : dataValue;
        const newErrors = errors ? errors[flatName] : [];
        return { value: newValue, name, errors: newErrors };
    });
}
exports.FormMappers = { mapModelToFields, mapToFields };
//# sourceMappingURL=Form.mappers.js.map