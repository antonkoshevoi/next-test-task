import { Pencil } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewAccount() {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Profile updated!");
  };

  return (
    <div className="px-4">
      <h2 className="text-lg font-semibold pb-2">Add new Account</h2>
      <Separator className="bg-gray-300" />

      <div className="py-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        
          <div className="flex flex-col space-y-2">
            <Label>Profile Image</Label>
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">{profileImage ? <AvatarImage src={URL.createObjectURL(profileImage)} alt="Profile Image" /> : <AvatarFallback>{name ? name[0].toUpperCase() : "?"}</AvatarFallback>}</Avatar>
   
              <Button variant="outline" asChild>
                <label htmlFor="profile-image" className="cursor-pointer flex items-center">
                  <Pencil className="mr-2 h-4 w-4" />
                  Change Image
                  <input id="profile-image" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </Button>
            </div>
          </div>

          <Button type="submit" variant="default" className="w-full mt-4">
            Update Profile
          </Button>
        </form>
      </div>
    </div>
  );
}
