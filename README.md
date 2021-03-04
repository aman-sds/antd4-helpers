## antd4-helpers

#### To start using:
```
yarn add @axmit/antd4-helpers
```

#### Examples:

Base: useFormValidation:
```
const LoginFormComponent: React.FC<AllProps> = props => {
    const { authModel } = props;
    const { fields } = useFormValidation(['email', 'password'], authModel.params, authModel.errors);
    ...

    return (
        <Form onFinish={login} fields={fields}>
```

With model *IUpdateModel\<T>*: useUpdateFormValidation:
```
import { useUpdateFormValidation } from '@axmit/antd4-helpers';

const CompanyUpdateFormComponent: React.FC<AllProps> = props => {
    const { itemModel, companyModel } = props;
    const { fields } = useUpdateFormValidation(
        ['name', 'domain', 'maxEmployees'],
        companyModel.params,
        companyModel.errors,
        itemModel
    );
    ...

    return (
        <Form onFinish={updateCompany} fields={fields}>
```
