export const validarCamposMiddleware = (req, res, next) => {
    debugger

    console.log("Antes da análise do JSON:", req.body);
    try {
        req.body = JSON.parse(req.body);
    } catch (error) {
        console.error("Erro na análise do corpo da requisição:", error);
        return res.status(400).json({ mensagem: 'Erro na análise do corpo da requisição.' });
    }

    console.log("Depois da análise do JSON:", req.body);

    const validarCampoString = (campo) => campo !== undefined && typeof campo === 'string';
    const validarCampoArray = (campo) => campo !== undefined && Array.isArray(campo) && campo.every(item => typeof item === 'string');

    const { titulo, resumo, banner, tecnologiasUsadas } = req.body;




    if (
        !validarCampoString(titulo) ||
        !validarCampoString(resumo) ||
        !validarCampoString(banner) ||
        !validarCampoArray(tecnologiasUsadas)
    ) {
        return res.status(400).json({ mensagem: "Certifique-se de que os campos são do tipo string ou arrays de strings." });
    }

    next();
};
