"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useSession, signOut, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Profile = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const [showEditModal, setShowEditModal] = useState(false);
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [updating, setUpdating] = useState(false);
  const [updateError, setUpdateError] = useState("");

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
    if (session) {
      setEditName(session.user.name || "");
      setEditImage(session.user.image || "");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!session) return null;

  const user = {
    name: session.user.name,
    email: session.user.email,
    avatar: session.user.image || "https://i.ibb.co.com/0jqHpnp/avatar.png",
    role: "Premium Reader",
    joined: new Date(session.user.createdAt).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    }),
    borrowedBooks: 14,
    favoriteGenre: "Science Fiction",
  };

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  const handleUpdate = async () => {
    setUpdating(true);
    setUpdateError("");
    try {
      const { error } = await authClient.updateUser({
        name: editName,
        image: editImage,
      });
      if (error) {
        setUpdateError(error.message || "Update failed");
      } else {
        setShowEditModal(false);
      }
    } catch (err) {
      setUpdateError("Something went wrong");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#eef6ff] via-white to-[#f5efff] px-4 py-10 sm:px-6 lg:px-10">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-300/30 blur-3xl rounded-full"></div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-[28px] shadow-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h2>

            {updateError && (
              <div className="mb-4 rounded-xl bg-red-100 border border-red-300 text-red-600 text-sm p-3">
                {updateError}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Full Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Avatar Image URL</label>
                <input
                  type="text"
                  value={editImage}
                  onChange={(e) => setEditImage(e.target.value)}
                  placeholder="https://..."
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
              </div>

              {/* Preview */}
              {editImage && (
                <div className="flex items-center gap-3 mt-2">
                  <Image
                    src={editImage}
                    alt="preview"
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <span className="text-sm text-gray-400">Preview</span>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                disabled={updating}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold hover:scale-[1.02] transition disabled:opacity-70"
              >
                {updating ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Profile Card */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[32px] shadow-2xl p-6 sm:p-8">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image src={user.avatar} alt={user.name} fill className="object-cover" />
            </div>
            <h1 className="mt-5 text-2xl font-bold text-gray-900 text-center">{user.name}</h1>
            <p className="text-gray-500 text-sm mt-1">{user.email}</p>
            <span className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium shadow-md">
              {user.role}
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/70 border border-gray-200 rounded-2xl p-4 text-center">
              <h2 className="text-2xl font-bold text-blue-600">{user.borrowedBooks}</h2>
              <p className="text-gray-500 text-sm mt-1">Borrowed</p>
            </div>
            <div className="bg-white/70 border border-gray-200 rounded-2xl p-4 text-center">
              <h2 className="text-lg font-bold text-purple-600">Sci-Fi</h2>
              <p className="text-gray-500 text-sm mt-1">Favorite</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 space-y-3">
            <Button
              onClick={() => setShowEditModal(true)}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            >
              <Icon icon="solar:user-bold" width="20" />
              Edit Profile
            </Button>
            <Button
              onClick={handleLogout}
              variant="bordered"
              className="w-full border-red-300 text-red-500"
            >
              <Icon icon="solar:logout-2-bold" width="20" />
              Logout
            </Button>
          </div>
        </div>

        {/* Right Content — same as before */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[32px] shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Account Overview</h2>
                <p className="text-gray-500 mt-2">Manage your profile and track your reading activity.</p>
              </div>
              <div className="px-5 py-2 rounded-full bg-green-100 text-green-600 text-sm font-semibold">
                Active Member
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {[
                { label: "Full Name", value: user.name },
                { label: "Email Address", value: user.email },
                { label: "Member Since", value: user.joined },
                { label: "Favorite Genre", value: user.favoriteGenre },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white/70 border border-gray-200 rounded-2xl p-5">
                  <p className="text-gray-500 text-sm">{label}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1 break-all">{value}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[32px] shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
              <Button variant="light">View All</Button>
            </div>
            <div className="space-y-4 mt-6">
              {[
                "Borrowed 'Atomic Habits'",
                "Returned 'The Alchemist'",
                "Added 'Dune' to wishlist",
                "Reviewed 'Rich Dad Poor Dad'",
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/70 border border-gray-200 rounded-2xl p-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                    <Icon icon="solar:book-bold" width="22" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{activity}</h3>
                    <p className="text-sm text-gray-500">Recently updated</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;