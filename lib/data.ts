export interface Watch {
    id: string;
    brand: string;
    model: string;
    reference: string;
    price: number;
    currency: string;
    description: string;
    specs: {
        caseMaterial: string;
        caseSize: string;
        movement: string;
        waterResistance: string;
        dialColor: string;
        year?: string;
    };
    image: string;
    isFeatured?: boolean;
}

export const watches: Watch[] = [
    {
        id: "1",
        brand: "Seiko",
        model: "GMT Brucewayne SSK001",
        reference: "SSK001",
        price: 28000,
        currency: "PHP",
        description: "Seiko GMT Brucewayne SSK001. Hardlex with lenses, Complete Set.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "42.5mm",
            movement: "Automatic GMT",
            waterResistance: "100m",
            dialColor: "Black",
        },
        image: "/w1.jpg",
        isFeatured: true,
    },
    {
        id: "2",
        brand: "Seiko",
        model: "GMT Batman SSK003",
        reference: "SSK003",
        price: 28000,
        currency: "PHP",
        description: "Seiko GMT Batman SSK003. Hardlex with lenses, Complete Set.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "42.5mm",
            movement: "Automatic GMT",
            waterResistance: "100m",
            dialColor: "Blue/Black",
        },
        image: "/w1.jpg",
        isFeatured: true,
    },
    {
        id: "3",
        brand: "Seiko",
        model: "GMT White Batman SSK033",
        reference: "SSK033",
        price: 28000,
        currency: "PHP",
        description: "Seiko GMT White Batman SSK033. Hardlex with lenses, Complete Set.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "42.5mm",
            movement: "Automatic GMT",
            waterResistance: "100m",
            dialColor: "White",
        },
        image: "/w1.jpg",
        isFeatured: true,
    },
    {
        id: "4",
        brand: "Seiko",
        model: "GMT Sprite SSK035",
        reference: "SSK035",
        price: 28000,
        currency: "PHP",
        description: "Seiko GMT Sprite SSK035. Hardlex with lenses, Complete Set.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "42.5mm",
            movement: "Automatic GMT",
            waterResistance: "100m",
            dialColor: "Green/Black",
        },
        image: "/w1.jpg",
        isFeatured: true,
    },
    {
        id: "5",
        brand: "Seiko",
        model: "GMT Ponkan Dial SSK005",
        reference: "SSK005",
        price: 28000,
        currency: "PHP",
        description: "Seiko GMT Ponkan Dial SSK005. Hardlex with lenses, Complete Set.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "42.5mm",
            movement: "Automatic GMT",
            waterResistance: "100m",
            dialColor: "Orange",
        },
        image: "/w1.jpg",
        isFeatured: false,
    },
    {
        id: "6",
        brand: "Seiko",
        model: "GMT Dark Horse SSK036",
        reference: "SSK036",
        price: 28000,
        currency: "PHP",
        description: "Seiko GMT Dark Horse SSK036. Hardlex with lenses, Complete Set.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "42.5mm",
            movement: "Automatic GMT",
            waterResistance: "100m",
            dialColor: "Dark Grey",
        },
        image: "/w1.jpg",
        isFeatured: false,
    },
    {
        id: "7",
        brand: "Seiko",
        model: "GMT Limited Edition Asia Pacific SSK046",
        reference: "SSK046",
        price: 28000,
        currency: "PHP",
        description: "Seiko GMT Limited Edition Asia Pacific SSK046. Hardlex with lenses, Complete Set.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "42.5mm",
            movement: "Automatic GMT",
            waterResistance: "100m",
            dialColor: "Unique Limited Edition",
        },
        image: "/w1.jpg",
        isFeatured: true,
    }
];
