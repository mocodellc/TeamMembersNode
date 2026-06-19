export interface ITeamGroupSummary {
  readonly teamGroupId: number;
  readonly name: string;
}

export interface ITeamGroup {
  readonly teamGroupId: number;
  readonly name: string;
  readonly description: string;
  readonly createdDate: string;
}

export interface ITeamMember {
  readonly teamMemberId: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly jobTitle: string;
  readonly department: string;
  readonly country: string;
  readonly createdDate: string;
  readonly lastEditDate: string | null;
  readonly deletedDate: string | null;
  readonly groups: readonly ITeamGroupSummary[];
}

export interface ITeamMemberUpsertRequest {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly jobTitle: string;
  readonly department: string;
  readonly country: string;
  readonly groupIds: readonly number[];
}

export interface ITeamGroupUpsertRequest {
  readonly name: string;
  readonly description: string;
}

export interface ITeamMemberDraft {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  country: string;
  groupIds: number[];
}
