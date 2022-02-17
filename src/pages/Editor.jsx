import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';

const Editor = () => {
  return (
    <div className='m-4 md:m-10 mt-20 md:mt-40 h-screen'>
      <div className='mt-10 mb-10'>
        <p className='text-lg text-gray-500'>App</p>
        <p className='text-3xl font-bold'>Editor</p>
      </div>
      <div>
        <div>
          <RichTextEditorComponent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              quasi consequuntur unde ab quos fugiat aliquam dolores adipisci,
              reiciendis vero modi hic vel nulla ipsa aperiam autem quibusdam
              obcaecati numquam deleniti laborum distinctio! Consequatur qui rem
              iusto in sit, explicabo illo cupiditate esse, nostrum ex quae?
              Repellendus architecto incidunt debitis, accusamus deserunt,
              necessitatibus quas eius nesciunt sit assumenda nulla! Sint, quo
              omnis! Praesentium nesciunt aliquid distinctio animi iure,
              consectetur porro deleniti. Harum praesentium obcaecati,
              asperiores laudantium nisi, fuga aliquid, molestias aspernatur
              officiis ex ut. Soluta, repellat atque? Minus dolor natus odit
              eaque deserunt laborum nisi alias, sapiente aliquid, totam ipsum?
            </p>
            <Inject
              services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
            />
          </RichTextEditorComponent>
        </div>
      </div>
    </div>
  );
};
export default Editor;
