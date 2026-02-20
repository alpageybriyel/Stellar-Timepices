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
        model: "Submariner Date",
        reference: "126610LN",
        price: 812000,
        currency: "PHP",
        description: "The refreshing new look of the Submariner Date, featuring a 41mm Oystersteel case and a black Cerachrom bezel.",
        specs: {
            caseMaterial: "Oystersteel",
            caseSize: "41mm",
            movement: "Automatic 3235",
            waterResistance: "300m",
            dialColor: "Black",
        },
        image: "/w1.jpg"
        ,
        isFeatured: true,
    },
    {
        id: "2",
        brand: "Patek Philippe",
        model: "Nautilus",
        reference: "5711/1A",
        price: 6440000,
        currency: "PHP",
        description: "The epitome of the elegant sports watch. The Nautilus 5711/1A in steel with a blue dial.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "40mm",
            movement: "Automatic 26-330 S C",
            waterResistance: "120m",
            dialColor: "Blue",
        },
        image: "",
        isFeatured: true,
    },
    {
        id: "3",
        brand: "Audemars Piguet",
        model: "Royal Oak",
        reference: "15500ST",
        price: 2525000,
        currency: "PHP",
        description: "Designed by Gérald Genta, the Royal Oak is defined by its octagonal bezel and integrated bracelet.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "41mm",
            movement: "Automatic 4302",
            waterResistance: "50m",
            dialColor: "Black",
        },
        image: "",
        isFeatured: true,
    },
    {
        id: "4",
        brand: "Omega",
        model: "Speedmaster Professional",
        reference: "310.30.42.50.01.001",
        price: 405000,
        currency: "PHP",
        description: "The Moonwatch is one of the world's most iconic timepieces, having been part of all six moon landings.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "42mm",
            movement: "Manual 3861",
            waterResistance: "50m",
            dialColor: "Black",
        },
        image: "",
        isFeatured: true,
    },
    {
        id: "5",
        brand: "Cartier",
        model: "Santos de Cartier",
        reference: "WSSA0029",
        price: 440000,
        currency: "PHP",
        description: "Created in 1904, the Santos de Cartier watch is based on the concept of form, a taste for minimalism, the precision of proportions and finally, an eye for detail.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "39.8mm",
            movement: "Automatic 1847 MC",
            waterResistance: "100m",
            dialColor: "White",
        },
        image: "",
        isFeatured: false,
    },
    {
        id: "6",
        brand: "Vacheron Constantin",
        model: "Overseas",
        reference: "4500V/110A-B128",
        price: 1800000,
        currency: "PHP",
        description: "The Overseas collection is the perfect daily companion for the modern traveler.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "41mm",
            movement: "Automatic 5100",
            waterResistance: "150m",
            dialColor: "Blue",
        },
        image: "",
        isFeatured: false,
    },
    {
        id: "7",
        brand: "Patek Philippe",
        model: "Aquanaut",
        reference: "5167A",
        price: 3650000,
        currency: "PHP",
        description: "When launched in 1997, the Aquanaut created a sensation. It was young, modern and unexpected.",
        specs: {
            caseMaterial: "Stainless Steel",
            caseSize: "40mm",
            movement: "Automatic 324 S C",
            waterResistance: "120m",
            dialColor: "Black Embossed",
        },
        image: "",
        isFeatured: false,
    },
    {
        id: "8",
        brand: "Richard Mille",
        model: "RM 11-03",
        reference: "RM11-03",
        price: 19600000,
        currency: "PHP",
        description: "The RM 11-03 Automatic Flyback Chronograph represents the perfect marriage of technical innovation and aesthetic appeal.",
        specs: {
            caseMaterial: "Carbon TPT",
            caseSize: "44mm",
            movement: "Automatic RMAC3",
            waterResistance: "50m",
            dialColor: "Skeleton",
        },
        image: "",
        isFeatured: true,
    }
];
