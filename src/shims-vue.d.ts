declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare type ComponentSize =  'large' | 'medium' | 'small' | 'mini'
declare type ComponentType = 'success' | 'warning' | 'error' | 'info'