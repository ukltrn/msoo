class SuccessCriterion {
    constructor(
        id,
        shortTitle,
        level,
        description = '',
        example = null,
        resources = null
    ) {
        this.id = id;
        this.shortTitle = shortTitle;
        this.level = level;
        this.description = description;
        this.example = example;
        this.resources = resources || { understandingUrl: '', specUrl: '' };
    }
}
export default SuccessCriterion;
