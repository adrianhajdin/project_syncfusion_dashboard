import { extend, addClass } from "@syncfusion/ej2-base";
import { DataManager } from "@syncfusion/ej2-data";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
  DialogFieldsModel,
  CardRenderedEventArgs,
} from "@syncfusion/ej2-react-kanban";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import * as dataSource from "./datasource.json";
import "./kanban.css";

/**
 * Kanban Overview sample
 */

const fields: DialogFieldsModel[] = [
  { text: "ID", key: "Title", type: "TextBox" },
  { key: "Status", type: "DropDown" },
  { key: "Assignee", type: "DropDown" },
  { key: "RankId", type: "TextBox" },
  { key: "Summary", type: "TextArea" },
];

function columnTemplate(props: { [key: string]: string }): JSX.Element {
  return (
    <div className="header-template-wrap">
      <div className={"header-icon e-icons " + props.keyField}></div>
      <div className="header-text">{props.headerText}</div>
    </div>
  );
}

function cardTemplate(props: { [key: string]: string }): JSX.Element {
  return (
    <div className="card-template flex">
      <div>
        <div className="e-card-header flex-1">
          <div className="e-card-header-caption">
            <div className="e-card-header-title e-tooltip-text">
              {props.Title}
            </div>
          </div>
        </div>
        <div className="e-card-content e-tooltip-text">
          <div className="e-text">{props.Summary}</div>
        </div>
        <div className="e-card-custom-footer">
          {props.Tags.split(",").map((tag: string) => (
            <div key={tag} className="e-card-tag-field e-tooltip-text">
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="buttons flex-1 m-1">
        <div>
          <div>
            <ButtonComponent cssClass="e-primary">View</ButtonComponent>
          </div>
          <div>
            <ButtonComponent cssClass="e-outline">Flow</ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kanban(this: unknown) {
  const data: Record<string, any>[] | DataManager | undefined = extend(
    [],
    (dataSource as { [key: string]: unknown }).cardData,
    true
  ) as Record<string, any>[] | DataManager | undefined;

  function cardRendered(args: CardRenderedEventArgs): void {
    const val: string = (args.data as { [key: string]: unknown })
      .Priority as string;
    addClass([args.element], val);
  }

  return (
    <div className="schedule-control-section">
      <div className="col-lg-12 control-section">
        <div className="control-wrapper">
          <KanbanComponent
            id="kanban"
            cssClass="kanban-overview"
            keyField="Status"
            dataSource={data}
            enableTooltip={true}
            swimlaneSettings={{ keyField: "Assignee" }}
            cardSettings={{
              headerField: "Title",
              template: cardTemplate.bind(this),
              selectionType: "Multiple",
            }}
            dialogSettings={{ fields: fields }}
            cardRendered={cardRendered.bind(this)}
          >
            <ColumnsDirective>
              <ColumnDirective
                headerText="To Do"
                keyField="Open"
                allowToggle={true}
                template={columnTemplate.bind(this)}
              />
              <ColumnDirective
                headerText="In Progress"
                keyField="InProgress"
                allowToggle={true}
                template={columnTemplate.bind(this)}
              />
              <ColumnDirective
                headerText="In Review"
                keyField="Review"
                allowToggle={true}
                template={columnTemplate.bind(this)}
              />
              <ColumnDirective
                headerText="Done"
                keyField="Close"
                allowToggle={true}
                template={columnTemplate.bind(this)}
              />
            </ColumnsDirective>
          </KanbanComponent>
        </div>
      </div>
    </div>
  );
}
export default Kanban;
