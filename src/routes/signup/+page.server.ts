import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const user = {
      username: data.get("username"),
      phone: data.get("phone"),
      password: data.get("password"),
    };

    return {
      success: true,
      user,
    };
  },
};
