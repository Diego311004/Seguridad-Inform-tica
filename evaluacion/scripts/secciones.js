function showDefinition(conceptId) {
    const definitions = document.querySelectorAll('.definition');
    definitions.forEach(definition => {
        if (definition.id === conceptId) {
            definition.style.display = 'block';
        } else {
            definition.style.display = 'none';
        }
    });
}
