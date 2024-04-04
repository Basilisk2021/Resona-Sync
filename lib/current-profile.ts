import { auth , currentUser } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const currentProfile = async () => {


//เตื่อนโค้ดสำหรับอัพเดทรูปโปรไฟล์
   const user = await currentUser(); 
//เตื่อนโค้ดสำหรับอัพเดทรูปโปรไฟล์


  const { userId } = auth();

  if (!userId) {
    return null;
  }
  
  const profile = await db.profile.findUnique({
    where: {
      userId
    }
  });

  //เตื่อนโค้ดสำหรับอัพเดทรูปโปรไฟล์ ปล.ยังไม่ได้เช็คค่า user?.imageUrl
    if(user?.imageUrl !== profile?.imageUrl){

    const profileUpdate =  db.profile.update({

      where: {
        userId: user?.id
      },
      data: {
        imageUrl : user?.imageUrl
      },
    })
    return profileUpdate;
  }    
  //เตื่อนโค้ดสำหรับอัพเดทรูปโปรไฟล์ ปล.ยังไม่ได้เช็คค่า user?.imageUrl

  return profile;
}