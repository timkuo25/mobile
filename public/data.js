const data = [
  {
    group: 'Lip Color',
    products: [
      {
        fullName: 'Burt\'s Bees Tinted Lip Balm',
        displayName: 'Tinted Lip Balm',
        description: 'Swipe on our tried and true Tinted Lip Balms for a hint of colour and 8 hours of moisture. With nourishing Shea Butter and Botanical Waxes, these softly tinted balms will quickly become your everyday, fuss-free favorites.',
        color: [
          { name: 'ROSE', hex: '#cf544d' },
          { name: 'RED DAHLIA', hex: '#b93b3b' },
          { name: 'HISBCUS', hex: '#c04455' },
          { name: 'PINK BLOSSOM', hex: '#d15f89' },
          { name: 'MAGNOLIA', hex: '#b03353' },
          { name: 'DAISY', hex: '#bd5865' },
        ]
      },
      {
        fullName: "Burt's Bees Lip Shimmer",
        displayName: 'Lip Shimmer',
        description: 'Want your lips to speak volumes? Give them a smooch of luminescent colour with our luscious Lip Shimmers. Shea Butter and antioxidant-rich Fruit Oils moisturize, nourish and soften lips naturally and lovingly.',
        color: [
          { name: 'PEONY', hex: '#dc9494' },
          { name: 'CARAMEL', hex: '#bb6e64' },
          { name: 'WATERMELON', hex: '#ba6f8c' },
          { name: 'CHERRY', hex: '#e14850' },
          { name: 'FIG', hex: '#9f5156' },
          { name: 'PLUM', hex: '#7a354a' },
          { name: 'RHUBARB', hex: '#d75568' },
          { name: 'GUAVA', hex: '#dba1b5' },
          { name: 'STRAWBERRY', hex: '#e086a6' },
          { name: 'GRAPEFRUIT', hex: '#f3aaa1' },
          { name: 'APRICOT', hex: '#f5a989' },
          { name: 'CHAMPAGNE', hex: '#eac1ca' },
        ],
      },
      {
        fullName: "Burt's Bees Squeezy Tinted Balm",
        displayName: 'Squeezy Tinted Balm',
        description: 'Squeeze on a hint of shiny colour and refreshing flavour. With responsibly sourced Beeswax and hydrating Cocoa Butter for nourished, moisturized lips full of healthy-looking shine.',
        color: [
          { name: 'MANDARIN GRANITA', hex: '#dc6d5e' },
          { name: 'SWEET PEACH', hex: '#ef8d7e' },
          { name: 'SUMMER MELON', hex: '#d35f5e' },
          { name: 'WATERMELON RUSH', hex: '#9b223c' },
          { name: 'BERRY SORBET', hex: '#8a2632' },
        ],
      },
      {
        fullName: "Burt's Bees Lip Gloss",
        displayName: 'Lip Gloss',
        description: 'Brilliant shine, a hydrating formula with Avocado Oil, and a smooth, never tacky finish—our latest lip gloss delivers it all.',
        color: [
          { name: 'FLUSHED BLUSH', hex: '#c57a5c' },
          { name: 'LILY DIP', hex: '#c67d71' },
          { name: 'PUNCH OF PINK', hex: '#d0787e' },
          { name: 'TULIP SPRING', hex: '#a93a37' },
          { name: 'ICED GLAZE', hex: '#c7a989' },
          { name: 'SPARKLING CIDER', hex: '#c59470' },
        ],
      },
    ]
  },
  {
    group: 'Foundation',
    products: [
      {
        fullName: "Burt's Bees Mattifying Powder Foundation",
        displayName: 'Mattifying Powder Foundation',
        description: 'Our oil-control Mattifying Powder Foundation gives you a smooth, even skin tone to help you put your best face forward. Lightweight and made with Bamboo to blur imperfections, it provides buildable coverage that blends effortlessly and leaves your skin with a beautiful, natural finish.',
        color: [
          { name: 'BARE', hex: '#dbbd91' },
          { name: 'VANILLA', hex: '#d8bb8e' },
          { name: 'SAND', hex: '#dbba8a' },
          { name: 'BAMBOO', hex: '#cdae81' },
          { name: 'ALMOND', hex: '#bc976d' },
          { name: 'NUTMEG', hex: '#ba946a' },
        ],
      },
      {
        fullName: "Burt's Bees Goodness Glows Tinted Moisturizer",
        displayName: 'Tinted Moisturizer',
        description: 'Looking for lightweight, sheer coverage plus all-day moisture? It’s here! Made with green tea and packed with vitamins and antioxidants, this tinted moisturizer is ideal for those looking for lighter-than-foundation coverage that hydrates and protects.',
        color: [
          { name: 'IVORY', hex: '#E3C0A0' },
          { name: 'BUFF', hex: '#e7b88e' },
          { name: 'NATURAL BEIGE', hex: '#d0a27e' },
          { name: 'HONEY', hex: '#ba9372' },
          { name: 'WARM HONEY', hex: '#b88c65' },
          { name: 'CHESTNUT', hex: '#a76d48' },
        ],
      },
    ],
  },
  {
    group: 'Blush',
    products: [
      {
        fullName: "Burt's Bees Powder Blush",
        displayName: 'Blush Makeup',
        description: 'Our 100% natural, mineral blush applies and blends easily and evenly to enhance your cheeks’ natural glow. The lightweight formula brings together Bamboo, Honey and Vitamin E to nourish skin for beautifully radiant results.',
        color: [
          { name: 'BARE PEACH', hex: '#eb937b' },
          { name: 'SHY PINK', hex: '#dc928f' },
          { name: 'FRESH APRICOT', hex: '#c7756a' },
          { name: 'VELVET WINE', hex: '#8d424c' },
          { name: 'TOASTED CINNAMON', hex: '#a98973' },
        ],
      },
      {
        fullName: "Burt's Bees Color Nurture Cream Blush",
        displayName: 'Color Nurture Cream Blush',
        description: 'Get a natural flush of colour that nourishes and moisturizes your skin with this luxurious, ultra-blendable cream blush.',
        color: [
          { name: 'GUAVA MERINGUE', hex: '#d68e86' },
          { name: 'STRAWBERRY CREAM', hex: '#b36a6b' },
          { name: 'BERRY WHIP', hex: '#963054' },
        ],
      },
      {
        fullName: "Burt's Bees All Aglow Lip & Cheek Stick",
        displayName: 'All Aglow Lip & Cheek Stick',
        description: 'Burt’s Bees All Aglow Lip & Cheek Stick gives your cheeks and lips the perfect pop of natural colour. This hydrating, lip and blush dual stick delivers beautiful colour that gives you a healthy-looking, natural glow. Packed with nourishing Jojoba Seed Oil, Sunflower Seed Oil and a hydrating core made of coconut oil.',
        color: [
          { name: 'BLUSH BAY', hex: '#d26980' },
          { name: 'DAHLIA DEW', hex: '#ac3a40' },
          { name: 'LILAC LAGOON', hex: '#873146' },
          { name: 'PEACH POND', hex: '#d2956c' },
          { name: 'PEONY POOL', hex: '#cd7271' },
          { name: 'SUEZ SANDS', hex: '#c37d78' },
        ],
      },
    ]
  },
  {
    group: 'Bronzer & Highlighter',
    products: [
      {
        fullName: "Burt's Bees All Aglow Bronzer Stick",
        displayName: 'All Aglow Bronzer Stick',
        description: 'Burt\'s Bees All Aglow Sticks instantly enhance skin\'s natural glow and define your best features with hydrating ingredients. Made with nourishing ingredients, the combination of moisturizing coconut oil, jojoba oil, cupuacu butter hydrates skin for hours.',
        color: [
          { name: 'GOLDEN SHIMMER', hex: '#cd905a' },
        ],
      },
      {
        fullName: "Burt's Bees All Aglow Highlighter Stick",
        displayName: 'All Aglow Highlighter Stick',
        description: 'Burt\'s Bees All Aglow Sticks instantly enhance skin\'s natural glow and define your best features with hydrating ingredients. Made with nourishing ingredients, the combination of moisturizing coconut oil, jojoba oil, cupuacu butter hydrates skin for hours.',
        color: [
          { name: 'OPAL MIST', hex: '#e5c2a8' },
        ],
      },
    ],
  },
  {
    group: 'Eye Shadow',
    products: [
      {
        fullName: "Burt's Bees Eye Shadow Trio",
        displayName: 'Eye Shadow Trio',
        description: 'Our easy-to-blend, long-lasting eyeshadow trios resist creasing, fading and smudging for all-day wear. Made with Bamboo, Honey and Vitamin E, this 100% natural palette nourishes skin with just the right amount of beautiful pigment.',
        color: [
          { name: 'SHIMMERING NUDES', hex: '#d9b8b1' },
          { name: 'ROSE GARDEN', hex: '#e3c6a3' },
          { name: 'COUNTRYSIDE LAVENDER', hex: '#e0bbae' },
          { name: 'DUSKY WOODS', hex: '#ead9b1' },
          { name: 'EVERGREEN FOREST', hex: '#cdb39f' },
        ],
      },
      {
        fullName: "Burt's Bees Color Nurture Cream Eye Shadow",
        displayName: 'Color Nurture Cream Eye Shadow',
        description: 'Light up your lids with a nourishing, creamy eye shadow that applies effortlessly with your fingertips. Comes in 3 buildable colours that multi-task as highlighters.',
        color: [
          { name: 'CARAMEL BUTTERCREAM', hex: '#d7bfad' },
          { name: 'ROSE CREAM', hex: '#cea89a' },
          { name: 'HONEY CARAMEL', hex: '#b8937f' },
        ],
      },
    ],
  },
];

const getProdInfo = displayName => {
  for (const group of data) {
    const product = group.products.find(product => product.displayName === displayName);
    if (product) {
      return product;
    }
  }
  return null;
}

const getColorsByProd = displayName => {
  for (const group of data) {
    const product = group.products.find(product => product.displayName === displayName);
    if (product) {
      return product.color;
    }
  }
  return [];
}

let groupedOptions = data.map(item => ({
  label: item.group,
  options: item.products.map(item => ({
    value: item.displayName,
    label: item.displayName,
  }))
}));

groupedOptions = [{ value: 'All Products', label: 'All Products' }, ...groupedOptions];

const getAllProducts = () => {
  return data.flatMap(group => group.products);
};

const allProducts = getAllProducts();

const getAllColorsWithAttributes = () => {
  return allProducts.flatMap(product =>
    product.color.map(item => ({
      ...product, 
      color: { name: item.name, hex: item.hex }, 
    }))
  );
};

const allColors = getAllColorsWithAttributes();


export { data, groupedOptions, allColors, getProdInfo, getColorsByProd };