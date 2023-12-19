class TokenStrategy:
    @classmethod
    def obtain(cls, user):
        from rest_framework_simplejwt.tokens import RefreshToken

        refresh = RefreshToken.for_user(user)
        refresh.access_token["role"] = user.role
        refresh["role"] = user.role
        return {
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "user": user,
        }
