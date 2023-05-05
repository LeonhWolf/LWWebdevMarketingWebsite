interface ISections {
  hero: "hero";
  service: "service";
  process: "process";
  references: "references";
  about: "about";
}
export const sections: ISections = {
  hero: "hero",
  service: "service",
  process: "process",
  references: "references",
  about: "about",
};

interface IRoutes {
  home: string;
  imprint: string;
  dataPolicy: string;
}
export const routes: IRoutes = {
  home: "/",
  imprint: "/imprint",
  dataPolicy: "/data-policy",
};
