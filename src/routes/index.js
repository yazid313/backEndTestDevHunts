import loginRoute from "./loginRouter.js";
import userRoute from "./userRouter.js";
import aboutRoute from "./aboutRouter.js";
import interestRoute from "./interestRouter.js";

export default (app) => {
  app.use("/api/login", loginRoute);
  app.use("/api/user", userRoute);
  app.use("/api/about", aboutRoute);
  app.use("/api/interest", interestRoute);
};
