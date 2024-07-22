import * as z from "zod";

export const schema = z.object({
    id: z
        .string({ message: "Campo obligatorio" })
        .min(3, { message: "Es necesario 3 caracteres como mínimo." })
        .max(10, { message: "Es necesario 3 caracteres como mínimo." })
    ,
    name: z
        .string({ message: "Campo obligatorio" })
        .min(5, { message: "Es necesario 3 caracteres como mínimo." })
        .max(100, { message: "Es necesario 3 caracteres como mínimo." })
    ,
    description: z
        .string({ message: "Campo obligatorio" })
        .min(10, { message: "Es necesario 3 caracteres como mínimo." })
        .max(200, { message: "Es necesario 3 caracteres como mínimo." })
    ,
    logo: z
        .string({ message: "Campo obligatorio" }),
    date_release: z.date({ message: "Campo obligatorio" }).refine(val => !isNaN(Date.parse(val)), {
        message: "Fecha inválida",
    }).refine(val => new Date(val) >= new Date(), {
        message: "La fecha debe ser posterior a la fecha actual",
    }),
    date_revision:
        z.date({ message: "Campo obligatorio" }),
}).refine((data) => data.date_revision > data.date_release, {
    message: "El campo Fecha Revisión  debe ser posterior al campo Fecha Liberación",
    path: ["endDate"],

});
