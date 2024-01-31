import { Component, Host, Prop, h } from '@stencil/core';
// import { format } from '../../utils/utils';
import { ButtonData, Heading, MyComponentData } from './modal';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: false,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() name: string;
  @Prop() data: MyComponentData | string;
  private _data: MyComponentData;

  componentWillLoad() {
    this._data = typeof this.data === 'string' ? JSON.parse(this.data) : this.data;
  }

  render(): Element {
    const heading = this._data?.heading || Heading;
    const description = this._data?.description || 'Hello World';
    const color = this._data?.gradient || 'gradient-1';
    const btn = this._data?.button || ButtonData;
    return (
      <Host>
        <section id="developer-story" class={`{module ${color}`}>
          <div class="insert developer-story-insert container">
            <div class="text">
              <p class="eyebrow">{description}</p>
              <h3>{heading}</h3>
              {btn.href ?
                <a class="btn btn-link" href='{btn.href}' target="{label.target}">{btn.label}</a> :
                <button class="btn btn-primary">{btn.label}</button>}
            </div>
            <div class="media">
              <img src="https://storage.googleapis.com/cms-storage-bucket/17b428191082bb916954.png" alt="Google Pay Developer Story" />
            </div>
          </div>
        </section>
      </Host>
    );
  }
}
