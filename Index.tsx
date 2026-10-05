import { useAuth } from "@/hooks/useAuth";
import AdminDashboard from "@/components/AdminDashboard";
import UserLeaderboard from "@/components/UserLeaderboard";
import Auth from "@/pages/Auth";
import { Button } from "@/components/ui/button";
import { LogOut, Shield, Trophy } from "lucide-react";

const Index = () => {
  const { user, isAdmin, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return <Auth />;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-foreground">LeaderBoard</span>
            {isAdmin && (
              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center gap-1">
                <Shield className="w-3 h-3" /> Admin
              </span>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={signOut} className="gap-2 text-muted-foreground hover:text-foreground">
            <LogOut className="w-4 h-4" /> Sign out
          </Button>
        </div>
      </header>

      <main className="py-8">
        {isAdmin ? <AdminDashboard /> : <UserLeaderboard />}
      </main>
    </div>
  );
};

export default Index;
