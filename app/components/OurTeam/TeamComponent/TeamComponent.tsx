import React from "react";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

interface TeamMembersData {
  title: string;
  members: TeamMember[];
}

interface TeamMembersComponentProps {
  data: TeamMembersData;
}

const TeamMembersComponent: React.FC<TeamMembersComponentProps> = ({
  data,
}) => {
  return (
    <div className="container py-[5%] px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-12">
        {data.title}
      </h2>

      {/* Team Members Grid */}
      <div className="space-y-8">
        {/* First Row - 2 larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.members.slice(0, 2).map((member) => (
            <div key={member.id} className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
                {member.socialLinks && (
                  <div className="flex gap-3">
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        className="text-gray-600 hover:text-blue-500 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.socialLinks.facebook && (
                      <a
                        href={member.socialLinks.facebook}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook className="w-5 h-5" />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        className="text-gray-600 hover:text-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 4 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.members.slice(2).map((member) => (
            <div key={member.id} className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembersComponent;
