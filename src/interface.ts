type CoreCount = 2 | 4 | 6 | 8;
type CoreName = "Dual Core" | "Quad Core" | "Octa Core";
type Core = CoreCount | CoreName;

interface IProsessor {
	brand: string;
	baseModel: string;
	modelName: string;
	clockSpeed: number;
	coreTotal: Core;
}

interface IIntel extends IProsessor {
	turboBoost: boolean;
}

interface IAMD extends IProsessor {
	precisionBoost?: boolean;
}
// function create Intel dengan interface IIntel yang mengextends(consume) interface IProsessor
function createIntel(processor: IIntel): void {
	const { brand, baseModel, modelName, clockSpeed, turboBoost } = processor;
	console.log(`Thank you ${brand}, you have successuflly created a processor with the following details: 
    base model : ${baseModel}
    model : ${modelName}
    clock speed : ${clockSpeed} ghz
    turbo boost enable? ${turboBoost}`);
}
// function create Amd dengan interface IAMD yang mengextends(consume) interface IProsessor
function createAMD(processor: IAMD): void {
	const { brand, baseModel, modelName, clockSpeed, precisionBoost, coreTotal } = processor;
	console.log(`Thank you ${brand}, you have successuflly created a processor with the following details: 
    base model : ${baseModel}
    model : ${modelName}
    clock speed : ${clockSpeed} ghz
    precision boost enable? ${precisionBoost || `don't have`}
    total core: ${coreTotal}`);
}

const coreI5: IIntel = {
	brand: "inter",
	baseModel: "core i5",
	modelName: "i5-11350F",
	clockSpeed: 4,
	turboBoost: true,
	coreTotal: 2,
};

const rayzen3: IAMD = {
	brand: "AMD",
	baseModel: "ryzen 3",
	modelName: "r-5570x",
	clockSpeed: 6,
	precisionBoost: true,
	coreTotal: "Quad Core",
};

const rayzen1: IAMD = {
	brand: "AMD",
	baseModel: "ryzen 1",
	modelName: "r-5570x",
	clockSpeed: 2,
	coreTotal: "Dual Core",
};

createIntel(coreI5);
createAMD(rayzen3);
createAMD(rayzen1);
