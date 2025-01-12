class PropertyResponseDTO {
  constructor(property) {
    this.property_id = property.property_id;
    this.title = property.title;
    this.description = property.description;
    this.city = property.city;
    this.street = property.street;
    this.street_number = property.street_number;
    this.owner_id = property.owner_id;
    this.tenant_id == property.tenant_id;
  }
}

module.exports = PropertyResponseDTO;
