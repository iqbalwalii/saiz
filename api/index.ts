export interface AuthenticateDto {
  token: string;
}

export interface BodyMeasurement {
  waist?: number;
  chest?: number;
  hip?: number;
  length?: number;
  bmi?: number;
  torsoLength?: number;
}

export enum BodyShapeType {
  Pear = "Pear",
  Apple = "Apple",
  Hourglass = "Hourglass",
  Rectangle = "Rectangle",
}

export interface BrandDto {
  id?: string | undefined;
  brandCode?: string | undefined;
  brandName?: string | undefined;
  brandUrl?: string | undefined;
  email?: string | undefined;
  address?: string | undefined;
  phoneNo?: string | undefined;
}

export interface CalculatorResponse {
  calculatedProductRanges?: MeasurementSizeRage;
  bodyMeasurement?: BodyMeasurement;
  calculatedBodyMeasurement?: BodyMeasurement;
  measuredSize?: string | undefined;
  deltaPercentage?: DeltaPercentage;
}

export interface ChangePasswordDto {
  password?: string | undefined;
  confirmPassword?: string | undefined;
}

export interface ChangeProfileDto {
  password?: string | undefined;
  confirmPassword?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
}

export interface DeltaPercentage {
  waist?: number;
  chest?: number;
  hip?: number;
  length?: number;
  bmi?: number;
  torsoLength?: number;
  average?: number;
}

export interface DoubleDoubleStringTuple {
  item1?: number;
  item2?: number;
  item3?: string | undefined;
}

export enum FitPreferenceType {
  Slim = "Slim",
  Average = "Average",
  Loose = "Loose",
}

export enum GarmentType {
  Shirt = "Shirt",
  Jacket = "Jacket",
  Sweater = "Sweater",
  Pants = "Pants",
  Skirt = "Skirt",
  Dress = "Dress",
  TurtleNeck = "TurtleNeck",
}

export enum GenderType {
  Male = "Male",
  Female = "Female",
}

export interface Image {
  src?: string | undefined;
}

export interface LoginDto {
  username: string;
  password: string;
}

export interface MeasurementSizeRage {
  chestRange?: DoubleDoubleStringTuple[] | undefined;
  waistRange?: DoubleDoubleStringTuple[] | undefined;
  lengthRange?: DoubleDoubleStringTuple[] | undefined;
  hipRange?: DoubleDoubleStringTuple[] | undefined;
}

export interface ProductDto {
  id?: string | undefined;
  productCode?: string | undefined;
  productName?: string | undefined;
  garmentType?: GarmentType;
  productMeasurements?: ProductMeasurementDto[] | undefined;
  productImages?: ProductImageDto[] | undefined;
  isActive?: boolean;
}

export interface ProductImageDto {
  src?: string | undefined;
}

export interface ProductMeasurementDto {
  productSize?: string | undefined;
  waist?: number;
  length?: number;
  hip?: number;
  chest?: number;
}

export interface RegisterBrandDto {
  brandCode?: string | undefined;
  brandUrl?: string | undefined;
}

export interface RegisterBrandUserDto {
  brand?: UpdateBrandDto;
  user?: RegisterUserDto;
}

export interface RegisterUserDto {
  username: string;
  password: string;
  confirmPassword: string;
  brandId?: string | undefined;
}

export interface ShopifyProductDto {
  title?: string | undefined;
  handle?: string | undefined;
  images?: Image[] | undefined;
  image?: Image;
}

export enum TorsoType {
  Short = "Short",
  Regular = "Regular",
  Long = "Long",
}

export interface UpdateBrandDto {
  brandCode?: string | undefined;
  brandUrl?: string | undefined;
  brandName?: string | undefined;
  email?: string | undefined;
  address?: string | undefined;
  phoneNo?: string | undefined;
  isActive?: boolean;
}

export interface FileParameter {
  data: any;
  fileName: string;
}
