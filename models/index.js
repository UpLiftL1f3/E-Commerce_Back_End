// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'Associated Categories',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  as: 'Associated Products',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'tags',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'products',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
