import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-post/edit', 'Integration | Component | blog post/edit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{blog-post/edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#blog-post/edit}}
      template block text
    {{/blog-post/edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
