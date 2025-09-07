class Quiz {
    constructor(guidelineId, questions = []) {
        this.guidelineId = guidelineId;
        this.questions = Array.isArray(questions) ? questions : [];
    }

    addQuestion(q) {
        if (q && q.id && Array.isArray(q.options)) this.questions.push(q);
        return this;
    }

    pickRandom(n = Math.min(5, this.questions.length)) {
        return sampleWithoutReplacement(this.questions, n);
    }

    score(answers) {
        const details = this.questions.map((q) => {
            const correct = q.options.find((o) => o.isCorrect);
            const selectedId = answers?.[q.id] ?? null;
            const isCorrect = !!correct && selectedId === correct.id;
            return { id: q.id, correctOptionId: correct?.id ?? null, selectedOptionId: selectedId, isCorrect };
        });
        const score = details.filter(d => d.isCorrect).length;
        return { score, total: this.questions.length, details };
    }
}
export default Quiz;

function sampleWithoutReplacement(arr, n) {
    const copy = [...arr];
    const out = [];
    const k = Math.min(n, copy.length);
    for (let i = 0; i < k; i++) {
        const idx = Math.floor(Math.random() * copy.length);
        out.push(copy.splice(idx, 1)[0]);
    }
    return out;
}
