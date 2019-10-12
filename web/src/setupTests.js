import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@habit-geek/shared/i18next/i18n";

configure({ adapter: new Adapter() });
