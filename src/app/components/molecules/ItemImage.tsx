import {
    Fragment,
    FunctionalComponent,
    FunctionComponent,
    h,
    JSX
  } from "preact";
  import register from "preact-custom-element";
  import {ImageProps} from '../atoms/Image';
  import '../atoms/Image';

   
  declare global {
    namespace preact.createElement.JSX {
      interface IntrinsicElements {
        ["x-image"]: ImageProps;
      }
    }
  }
  
  export type ItemImageProps = {
    text: string,
    src : string
  };
  
  export const ItemImage: FunctionalComponent<ItemImageProps> = ({
    text,src
  }): JSX.Element => {
    
  
    return (
      <div class="item-image">
        <span icon="icon"><image src={"info.svg"} width="15" height="15" /></span>
       <x-image src={src} />
      </div>
    );
  };
  register(ItemImage, "x-item-image", ["src","text"]);
  