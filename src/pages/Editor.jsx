import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import Header from '../components/Header';

const Editor = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 min-h-590 bg-white rounded-3xl'>
      <Header category={'App'} title={'Editor'} />

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
            <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
          </RichTextEditorComponent>
        </div>
      </div>
    </div>
  );
};
export default Editor;
