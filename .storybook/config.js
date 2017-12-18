import { configure } from '@storybook/vue'

const loadStories = () => {
  require("../src/stories/index")
};

configure(loadStories, module)
