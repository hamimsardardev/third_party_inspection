"use client";
import Container from "@/app/components/common/Container";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <section className="bg-[url('/bg-building.jpg')] bg-cover bg-center ">
      <div className="bg-gray-900/90">
        <Container>
          <div className="w-full grid md:grid-cols-2 gap-10 items-center px-6 py-10">
            {/* LEFT SIDE FORM */}
            <div>
              <h1 className="text-3xl font-semibold text-primary mb-2">
                CREATE YOUR ACCOUNT!
              </h1>

              <p className="text-sm mb-6 text-white">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Log in
                </Link>
              </p>

              <form className="space-y-4">
                <div>
                  <label className="text-sm text-primary">First Name</label>
                  <input
                    type="text"
                    className="w-full border text-white rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-sm text-primary">Last Name</label>
                  <input
                    type="text"
                    className="w-full border text-white rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-sm text-primary">Country</label>
                  <select className="w-full border text-white bg-gray-800 rounded-md p-2 mt-1">
                    <option>United States</option>
                    <option>Bangladesh</option>
                    <option>China</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-primary">Company Name</label>
                  <input
                    type="text"
                    className="w-full text-white border rounded-md p-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm text-primary">Phone</label>
                  <div className="flex gap-2 mt-1">
                    <select className="border text-white bg-gray-800 rounded-md p-2 w-24">
                      <option>+1</option>
                      <option>+880</option>
                    </select>
                    <input
                      type="text"
                      className="flex-1 text-white border rounded-md p-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-primary">Email</label>
                  <input
                    type="email"
                    className="w-full text-white border rounded-md p-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm text-primary">
                    Create Password
                  </label>
                  <input
                    type="password"
                    className="w-full text-white border rounded-md p-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm text-primary">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full text-white border rounded-md p-2 mt-1"
                  />
                </div>

                <button className="bg-primary hover:bg-primary/90 text-third px-6 py-2 rounded-full mt-4">
                  Start Now
                </button>
              </form>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="hidden md:flex justify-center">
              <div className="relative w-[500px] h-[300px]">
                <Image
                  src="/about-company.jpg"
                  alt="building"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      </section>
    </>
  );
};

export default SignUp;
