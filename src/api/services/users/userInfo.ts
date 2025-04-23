import { supabase } from "../../../supabaseClient";

export const getUserLoggedIn = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    return user;
  }
  return null;
};
