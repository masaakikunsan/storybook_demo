import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import Button from '../components/Button.vue'

storiesOf('Usage button', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    components: { Button },
    template: `<Button text="default" />`
  }))

storiesOf('Button', module)
  .add('default', () => ({
    components: { Button },
    template: `<Button text="default" />`
  }))
  .add('color', () => ({
    components: { Button },
    template: `
      <div style="display: flex;">
        <Button text='primary' kind='primary'/>
        <Button text='default' kind='default'/>
        <Button text='success' kind='success'/>
        <Button text='info' kind='info'/>
        <Button text='warning' kind='warning'/>
        <Button text='danger' kind='danger'/>
        <Button text='dark' kind='dark'/>
      </div>
    `
  }))
  .add('size', () => ({
    components: { Button },
    template: `
    <div>
      <div style="display: flex;">
        <Button text='minimum' kind='primary' size="minimum"/>
        <Button text='small' kind='primary' size="small"/>
        <Button text='normal' kind='primary' size="normal"/>
        <Button text='large' kind='primary' size="large"/>
      </div>
      <div style="display:flex;"><Button text='full' kind='primary' size="full"/></div>
    </div>
    `
  }))
