import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// 1. Create the adapter with the URL, not the database instance
const adapter = new PrismaBetterSqlite3({
  url: "file:./prisma/dev.db",
});

// 2. Initialize Prisma Client with the adapter
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding...");
  // Clear existing data to avoid unique constraint errors
  await prisma.teamMemberGroups.deleteMany();
  await prisma.teamMember.deleteMany();
  await prisma.teamGroups.deleteMany();

  // Seed Groups
  await prisma.teamGroups.createMany({
    data: [
      {
        id: 1,
        name: "Engineering",
        description: "Product engineering and platform delivery",
        createdDate: new Date("2026-06-15T10:00:00Z"),
      },
      {
        id: 2,
        name: "Design",
        description: "UX and product design organization",
        createdDate: new Date("2026-06-15T10:00:00Z"),
      },
      {
        id: 3,
        name: "Operations",
        description: "Support and internal operations",
        createdDate: new Date("2026-06-15T10:00:00Z"),
      },
      {
        id: 4,
        name: "Leadership",
        description: "People and strategy leadership",
        createdDate: new Date("2026-06-15T10:00:00Z"),
      },
    ],
  });

  // Seed Members
  await prisma.teamMember.createMany({
    data: [
      {
        id: 1,
        firstName: "Avery",
        lastName: "Cole",
        email: "avery.cole@example.com",
        jobTitle: "Staff Engineer",
        department: "Platform",
        country: "United States",
        createdDate: new Date("2026-06-15T08:30:00Z"),
      },
      {
        id: 2,
        firstName: "Harper",
        lastName: "Diaz",
        email: "harper.diaz@example.com",
        jobTitle: "Product Designer",
        department: "Design",
        country: "Canada",
        createdDate: new Date("2026-06-15T08:40:00Z"),
      },
      {
        id: 3,
        firstName: "Noah",
        lastName: "Bennett",
        email: "noah.bennett@example.com",
        jobTitle: "Engineering Manager",
        department: "Engineering",
        country: "United Kingdom",
        createdDate: new Date("2026-06-15T08:50:00Z"),
      },
      {
        id: 4,
        firstName: "Mia",
        lastName: "Ahmed",
        email: "mia.ahmed@example.com",
        jobTitle: "DevOps Engineer",
        department: "Operations",
        country: "Germany",
        createdDate: new Date("2026-06-15T09:00:00Z"),
      },
      {
        id: 5,
        firstName: "Lucas",
        lastName: "Kim",
        email: "lucas.kim@example.com",
        jobTitle: "Backend Engineer",
        department: "Platform",
        country: "South Korea",
        createdDate: new Date("2026-06-15T09:10:00Z"),
      },
      {
        id: 6,
        firstName: "Emma",
        lastName: "Lopez",
        email: "emma.lopez@example.com",
        jobTitle: "Technical Program Manager",
        department: "Operations",
        country: "Spain",
        createdDate: new Date("2026-06-15T09:20:00Z"),
      },
      {
        id: 7,
        firstName: "Ethan",
        lastName: "Walker",
        email: "ethan.walker@example.com",
        jobTitle: "Frontend Engineer",
        department: "Engineering",
        country: "Australia",
        createdDate: new Date("2026-06-15T09:30:00Z"),
      },
      {
        id: 8,
        firstName: "Sophia",
        lastName: "Nguyen",
        email: "sophia.nguyen@example.com",
        jobTitle: "QA Engineer",
        department: "Engineering",
        country: "Vietnam",
        createdDate: new Date("2026-06-15T09:40:00Z"),
      },
      {
        id: 9,
        firstName: "Liam",
        lastName: "Patel",
        email: "liam.patel@example.com",
        jobTitle: "Data Analyst",
        department: "Operations",
        country: "India",
        createdDate: new Date("2026-06-15T09:50:00Z"),
      },
      {
        id: 10,
        firstName: "Olivia",
        lastName: "Rossi",
        email: "olivia.rossi@example.com",
        jobTitle: "Director of Product",
        department: "Leadership",
        country: "Italy",
        createdDate: new Date("2026-06-15T10:00:00Z"),
      },
    ],
  });

  // Seed MemberGroups
  await prisma.teamMemberGroups.createMany({
    data: [
      { id: 1, teamMemberId: 1, teamGroupId: 1 },
      { id: 2, teamMemberId: 2, teamGroupId: 2 },
      { id: 3, teamMemberId: 3, teamGroupId: 1 },
      { id: 4, teamMemberId: 3, teamGroupId: 4 },
      { id: 5, teamMemberId: 4, teamGroupId: 3 },
      { id: 6, teamMemberId: 5, teamGroupId: 1 },
      { id: 7, teamMemberId: 6, teamGroupId: 3 },
      { id: 8, teamMemberId: 7, teamGroupId: 1 },
      { id: 9, teamMemberId: 8, teamGroupId: 1 },
      { id: 10, teamMemberId: 9, teamGroupId: 3 },
      { id: 11, teamMemberId: 10, teamGroupId: 4 },
    ],
  });
  console.log("Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
