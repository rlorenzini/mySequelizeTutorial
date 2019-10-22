'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "potatoes",
      [
        {name: "Yukon Gold", starch_level: "All Purpose", cook_method: "boil, bake, fry", createdAt: new Date(), updatedAt: new Date()},
        {name: "Purple Peruvian", starch_level: "All Purpose", cook_method: "boil, bake, fry, roast, grill", createdAt: new Date(), updatedAt: new Date()},
        {name: "Idaho Russet", starch_level: "Starchy", cook_method: "bake, mash, fry", createdAt: new Date(), updatedAt: new Date()},
        {name: "Katahdin", starch_level: "Starchy", cook_method: "boil, bake, fry", createdAt: new Date(), updatedAt: new Date()},
        {name: "Red Bliss", starch_level: "Waxy", cook_method: "soup, stew, boil, roast, salad, casserole", createdAt: new Date(), updatedAt: new Date()},
        {name: "new Potato", starch_level: "Waxy", cook_method: "boil, steam, roast", createdAt: new Date(), updatedAt: new Date()},
        {name: "Adirondack Blue", starch_level: "Waxy", cook_method: "mash, bake, boil, steam, salad, casserole, gratin", createdAt: new Date(), updatedAt: new Date()},
        {name: "Adirondack Red", starch_level: "Waxy", cook_method: "boil, mash, fry", createdAt: new Date(), updatedAt: new Date()},
        {name: "Fingerling", starch_level: "Waxy", cook_method: "boil, bake, roast, salad", createdAt: new Date(), updatedAt: new Date()},
        {name: "Carola", starch_level: "Waxy", cook_method: "grill, roast, boil, fry, salad, casserole, gratin", createdAt: new Date(), updatedAt: new Date()},
        {name: "Inca Gold", starch_level: "Waxy", cook_method: "roast, mash, boil, salad, casserole, gratin", createdAt: new Date(), updatedAt: new Date()},
        {name: "Rose Gold", starch_level: "Waxy", cook_method: "bake, steam, boil, salad, casserole, gratin", createdAt: new Date(), updatedAt: new Date()},
        {name: "Purple Viking", starch_level: "Waxy", cook_method: "bake, roast, boil, salad, casserole, gratin", createdAt: new Date(), updatedAt: new Date()}
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("potatoes", null, {})
  }
};
