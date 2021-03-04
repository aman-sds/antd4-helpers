"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormMapper = exports.useUpdateFormValidation = exports.useFormValidation = void 0;
const react_1 = require("react");
const mappers_1 = require("../mappers");
exports.useFormValidation = function (fieldsNames, model, errors, initModel) {
    const [fields, setFields] = react_1.useState(fieldsNames.map(item => ({ name: item, value: initModel && initModel[item] })));
    react_1.useEffect(() => {
        setFields(prevState => mappers_1.FormMappers.mapModelToFields(prevState, errors === null || errors === void 0 ? void 0 : errors.validation, model));
    }, [model, errors, setFields]);
    return { fields };
};
exports.useUpdateFormValidation = function (fieldsNames, model, errors, initModel) {
    return exports.useFormValidation(fieldsNames, model === null || model === void 0 ? void 0 : model.data, errors, initModel);
};
exports.useFormMapper = function (fieldsNames, data, params, errors) {
    const [fields, setFields] = react_1.useState(fieldsNames.map(item => ({ name: item, value: undefined })));
    react_1.useEffect(() => {
        setFields(prevState => mappers_1.FormMappers.mapToFields(prevState, errors === null || errors === void 0 ? void 0 : errors.validation, data, params));
    }, [data, params, errors, setFields]);
    const setField = (newField) => {
        setFields(prevState => {
            const stateWithoutNew = prevState.filter(({ name }) => name !== newField.name);
            return stateWithoutNew.concat([newField]);
        });
    };
    return { fields, setField };
};
//# sourceMappingURL=Form.hooks.js.map