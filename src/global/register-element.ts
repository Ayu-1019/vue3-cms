import { App } from 'vue';
import 'element-plus/theme-chalk/base.css';
import 'element-plus/theme-chalk/index.css';
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElAlert,
  ElInput,
  ElAside,
  ElRadio,
  ElTabs,
  ElTabPane
} from 'element-plus';

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElAlert,
  ElInput,
  ElAside,
  ElRadio,
  ElTabs,
  ElTabPane
];

export default function (app: App): void {
  // 按需引入element-plus组件
  for (const component of components) {
    app.component(component.name, component);
  }
}
