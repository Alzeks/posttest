
import { NextResponse } from "next/server";
import { supabase } from "../../../../supabase";

export const POST = async (request) => {
  const { name, email, password, isAuthor } = await request.json();

try {
  const { data,  error} = await supabase.from('users').insert([
    {
      username: name,
      email: email,
      password: password,
      isAuthor: isAuthor
    }
  ])
     .select()
   
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
