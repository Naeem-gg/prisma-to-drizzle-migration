import { relations } from "drizzle-orm/relations";
import { User, Design, Stdesign, Feedback, Contributors } from "./schema";

export const DesignRelations = relations(Design, ({one, many}) => ({
	User: one(User, {
		fields: [Design.userId],
		references: [User.id]
	}),
	Stdesigns: many(Stdesign),
	Contributors: many(Contributors),
}));

export const UserRelations = relations(User, ({many}) => ({
	Designs: many(Design),
	Feedbacks: many(Feedback),
}));

export const StdesignRelations = relations(Stdesign, ({one}) => ({
	Design: one(Design, {
		fields: [Stdesign.designId],
		references: [Design.designId]
	}),
}));

export const FeedbackRelations = relations(Feedback, ({one}) => ({
	User: one(User, {
		fields: [Feedback.userId],
		references: [User.id]
	}),
}));

export const ContributorsRelations = relations(Contributors, ({one}) => ({
	Design: one(Design, {
		fields: [Contributors.designId],
		references: [Design.designId]
	}),
}));