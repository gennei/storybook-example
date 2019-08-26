/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

/* Atom */
import Button from './Atoms/FormSubmitButton.vue';
import Star from './Atoms/Star.vue';
import ClearButton from './Atoms/ClearButton.vue';
import Textarea from './Atoms/FormTextarea.vue';
import Textlabel from './Atoms/Textlabel.vue';
import AnnotationText from './Atoms/AnnotationText';

/* Molecules */
import RatingStar from './Molecules/RatingStar.vue';

storiesOf('Atoms', module)
  .add('AnnotationText', () => ({
    components: { AnnotationText },
    template: '<AnnotationText text="HTMLタグ使用不可"/>'
  }))
  .add('Textlabel', () => ({
    components: { Textlabel },
    template: '<Textlabel text="評価"/>'
  }))
  .add('Textarea', () => ({
    components: { Textarea },
    template: '<Textarea/>'
  }))
  .add('ClearButton', () => ({
    components: { ClearButton },
    template: '<ClearButton/>'
  }))
  .add('SubmitButton', () => ({
    components: { Button },
    template: '<Button/>'
  }))
  .add('Star', () => ({
    components: { Star },
    template: '<Star/>'
  }))
  .add('Unstar', () => ({
    components: { Star },
    template: '<Star id=1 rank=0/>'
  }));

storiesOf('Molecules', module)
  .add('RatingStar', () => ({
    components: { RatingStar },
    template: '<RatingStar/>'
  }));
