import stariMost from "./images/Stari most/mostar1.webp";
import vreloBune from "./images/Vrelo Bune/buna1.webp";
import kravice from "./images/Kravice/kravice1.webp";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#features", text: "features" },
  { id: 4, href: "#gallery", text: "gallery" },
  { id: 5, href: "#tours", text: "tours" },
];
export const socialLinks = [
  {
    id: 1,
    href: "https://www.booking.com/hotel/ba/apartment-vacationvibes-mostar",
    icon: "fa fa-bold",
  },
  { id: 2, href: "https://www.instagram.com", icon: "fab fa-instagram" },
  {
    id: 3,
    href: "https://www.airbnb.com/rooms/1058639042900828860?source_impression_id=p3_1707312334_p014yqo6Qxk7O7zp",
    icon: "fab fa-airbnb",
  },
];

export const features = [
  { id: 1, title: "Spacious Living Room", icon: "fa fa-couch" },
  { id: 2, title: "Modern Kitchen", icon: "fa fa-utensils" },
  { id: 3, title: "Master Bedroom with Ensuite", icon: "fa fa-bed" },
  { id: 4, title: "Scenic View", icon: "fa fa-mountain" },
  { id: 5, title: "High-Speed Internet", icon: "fa fa-wifi" },
  { id: 6, title: "Parking Space", icon: "fa fa-parking" },

  // Add more features as needed
];

export const pictures = [{ id: 1, image: "./images/bath.jpg" }];

export const tours = [
  {
    id: 1,
    image: stariMost,
    title: "Stari Most",
    text: "The Old Bridge in Mostar, also known as Stari Most, is a stunning architectural gem located in the city of Mostar in Bosnia and Herzegovina.  The bridge features a single, majestic stone arch that spans the Neretva River, connecting the two sides of the city.",
    distance: 2,
    duration: 5,
  },
  {
    id: 2,
    image: vreloBune,
    title: "Vrelo Bune",
    text: "Vrelo Bune is a natural spring located near the town of Blagaj, just a few kilometers south of Mostar in Bosnia and Herzegovina. The emerald-green waters of the spring contrast with the rugged cliffs and verdant vegetation, creating a breathtaking panorama that attracts photographers, nature enthusiasts, and tourists alike.",
    distance: 14,
    duration: 21,
  },
  {
    id: 3,
    image: kravice,
    title: "Kravice",
    text: "Kravice Waterfall is a stunning natural attraction located in the southern region of Bosnia and Herzegovina, near the village of Studenci. Kravice Waterfall is renowned for its breathtaking beauty. The waterfall forms a semi-circular shape as it plunges into a large, natural pool below, creating a mesmerizing display of cascading water surrounded by verdant vegetation.",
    distance: 43,
    duration: 53,
  },
];

export const otherLinks = [
  {
    id: 1,
    href: "https://www.booking.com/hotel/hr/apartment-good-vibes-cavtat",
    icon: "fa fa-bold",
  },
  {
    id: 2,
    href: "https://www.instagram.com/goodvibeshr2023/",
    icon: "fab fa-instagram",
  },
  {
    id: 3,
    href: "https://www.airbnb.com/rooms/893916305843801917?source_impression_id=p3_1685107350_L%2BR5bmnqeqMYUVQx",
    icon: "fab fa-airbnb",
  },
  {
    id: 4,
    href: "https://www.tripadvisor.in/VacationRentalReview-g303804-d25960369-Apartment_Good_Vibes-Cavtat_Konavle_Dubrovnik_Neretva_County_Dalmatia.html",
    icon: "fab fa-tripadvisor",
  },
];
