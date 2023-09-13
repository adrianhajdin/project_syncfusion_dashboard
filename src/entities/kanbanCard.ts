class kanbanCard {
    Id: string;
    Title: string;
    Status: string;
    Summary: string;
    Type: string;
    Priority: string;
    Tags: string;
    Estimate: number;
    Assignee: string;
    RankId: number;
    Color: string;
    ClassName: string;
	Position: Array<number> = [0, 0];
	Label: string;
	Subject: string;

    constructor(
        Id: string,
        Title: string,
        Status: string,
        Summary: string,
        Type: string,
        Priority: string,
        Tags: string,
        Estimate: number,
        Assignee: string,
        RankId: number,
        Color: string,
        ClassName: string,
		Position: Array<number> = [0, 0],
		Label: string,
		Subject: string
    ) {
        this.Id = Id;
        this.Title = Title;
        this.Status = Status;
        this.Summary = Summary;
        this.Type = Type;
        this.Priority = Priority;
        this.Tags = Tags;
        this.Estimate = Estimate;
        this.Assignee = Assignee;
        this.RankId = RankId;
        this.Color = Color;
        this.ClassName = ClassName;
		this.Position = Position;
		this.Label = Label;
		this.Subject = Subject;
    }
}

export default kanbanCard;
