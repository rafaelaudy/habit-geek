import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const mockTranslation = {
  "save-habit-type-options": [
    { key: "Health", label: "Health" },
    { key: "Social", label: "Social" },
    { key: "Career", label: "Career" },
    { key: "Hobbies", label: "Hobbies" }
  ],
  "date-days-short": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  "date-months-short": [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]
};

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key, config) => {
      if (mockTranslation[key]) return mockTranslation[key];
      if (config) return [key];
      return key;
    }
  })
}));

jest.mock("i18next", () => ({
  t: key => {
    return key;
  }
}));

configure({ adapter: new Adapter() });
