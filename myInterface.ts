interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: number;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, discount: number): number;
}
// I can create interface with the same name which i used

interface User {
  githubToken;
}

// Also we can extends the interface into another

interface Admin extends User {
  role: "Admin" | "Sub-Admin";
}

const login: Admin = {
  role: "Admin",
  dbId: 12,
  email: "h@h.com",
  userId: 12,
  githubToken: 43,
  startTrail: () => {
    return "";
  },
  getCoupon: (name: "Vishu", off: 2) => {
    return 12;
  },
};
