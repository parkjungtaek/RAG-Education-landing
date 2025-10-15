import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ConsultationModal = ({ open, onOpenChange }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
    purposes: [] as string[],
    message: "",
  });

  const purposes = ["취업", "이직", "역량강화", "창업"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("필수 항목을 모두 입력해주세요.");
      return;
    }

    // Phone validation (simple Korean mobile pattern)
    const phonePattern = /^010-?\d{4}-?\d{4}$/;
    if (!phonePattern.test(formData.phone)) {
      toast.error("올바른 전화번호 형식을 입력해주세요. (010-XXXX-XXXX)");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    // Success
    toast.success("상담 신청이 완료되었습니다! 빠른 시일 내에 연락드리겠습니다.");
    onOpenChange(false);
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      experience: "",
      purposes: [],
      message: "",
    });
  };

  const handlePurposeToggle = (purpose: string) => {
    setFormData((prev) => ({
      ...prev,
      purposes: prev.purposes.includes(purpose)
        ? prev.purposes.filter((p) => p !== purpose)
        : [...prev.purposes, purpose],
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">무료 상담 신청</DialogTitle>
          <DialogDescription>
            AI 개발자 과정에 대해 궁금하신 점을 문의해주세요.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름 *</Label>
            <Input
              id="name"
              placeholder="홍길동"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">전화번호 *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="010-1234-5678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">이메일 *</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">개발 경험</Label>
            <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
              <SelectTrigger>
                <SelectValue placeholder="선택해주세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="python">Python 경험</SelectItem>
                <SelectItem value="java">Java 경험</SelectItem>
                <SelectItem value="both">둘 다</SelectItem>
                <SelectItem value="none">없음</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>신청 목적 (복수 선택 가능)</Label>
            <div className="space-y-2">
              {purposes.map((purpose) => (
                <div key={purpose} className="flex items-center space-x-2">
                  <Checkbox
                    id={purpose}
                    checked={formData.purposes.includes(purpose)}
                    onCheckedChange={() => handlePurposeToggle(purpose)}
                  />
                  <label
                    htmlFor={purpose}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {purpose}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">문의 사항</Label>
            <Textarea
              id="message"
              placeholder="궁금하신 내용을 자유롭게 작성해주세요."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full gradient-bg shadow-glow text-lg py-6">
            상담 신청하기
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
