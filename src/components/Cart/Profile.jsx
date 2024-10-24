const Profile = () => {
  return (
    <>
      <div className="py-5 px-3 flex gap-3 border-b">
        <img
          src="/image/profile.jpeg"
          alt="profil"
          draggable="false"
          className="max-h-12 rounded-full aspect-square"
        />
        <div className="flex flex-col justify-center">
          <p className="capitalize font-semibold text-sm">rikky mahendra</p>
          <p className="text-xs font-semibold text-gray-300">
            rikky.mahendra54@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
