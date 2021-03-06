import type { InjectionKey } from "vue"

type IModelType = boolean | string | number

export interface RadioGroupContext {
  name: 'ElRadioGroup';
  modelValue: IModelType;
  fill: string;
  textColor: string;
  disabled: boolean;
  size: ComponentSize;
  radioGroupSize: ComponentSize;
  changeEvent: (val: IModelType) => void
}

// 定义注入类型
const radioGroupKey: InjectionKey<RadioGroupContext> = 'RadioGroup' as any

export default radioGroupKey
