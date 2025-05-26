export enum PlanType {
  Business = "business",
  BusinessPlus = "business_plus",
  Company = "company",
}

export enum PlanCategory {
  Provider = "provider",
  Patient = "patient",
}

export enum PlanTypeForPatient {
  Individual = "individual",
  Patient = "patient",
  Family = "family",
}

export interface PlanProps {
  type: PlanType
  title: string
  price: string
  features: string[]
}
